import { envParseBoolean } from '#lib/env';
import { AnalyticsSchema } from '#lib/types/AnalyticsSchema';
import { enumerable } from '#utils/util';
import type { Point } from '@influxdata/influxdb-client';
import { Event, EventOptions, PieceContext } from '@sapphire/framework';

export abstract class AnalyticsEvent extends Event {
	@enumerable(false)
	public tags: [AnalyticsSchema.Tags, string][] = [];

	public constructor(context: PieceContext, options?: EventOptions) {
		super(context, { ...options, enabled: envParseBoolean('INFLUX_ENABLED') });
	}

	public onLoad() {
		this.initTags();
		return super.onLoad();
	}

	public writePoint(point: Point) {
		return this.context.client.analytics!.writeApi.writePoint(this.injectTags(point));
	}

	public writePoints(points: Point[]) {
		points = points.map((point) => this.injectTags(point));
		return this.context.client.analytics!.writeApi.writePoints(points);
	}

	protected injectTags(point: Point) {
		for (const tag of this.tags) {
			point.tag(tag[0], tag[1]);
		}
		return point;
	}

	protected initTags() {
		this.tags.push([AnalyticsSchema.Tags.Client, process.env.CLIENT_ID], [AnalyticsSchema.Tags.OriginEvent, this.event]);
	}
}
