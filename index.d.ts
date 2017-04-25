type PluginArgs = {
	shouldRejectClick?: ( lastTouchEventTimeStamp: number, clickEventTimestamp: number ) => void
}

export default function injectTapEventPlugin( args?: PluginArgs ): void
