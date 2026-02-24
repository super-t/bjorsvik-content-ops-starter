import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import BackgroundImage from '../../atoms/BackgroundImage';

export default function Section(props) {
    const { elementId, className, colors = 'bg-light-fg-dark', backgroundImage, backgroundVideo, styles = {}, children } = props;

    return (
        <div
            id={elementId}
            className={classNames(
                'sb-component',
                'sb-component-section',
                className,
                colors,
                'relative',
                styles?.margin ? mapStyles({ margin: styles?.margin }) : undefined,
                styles?.padding ? mapStyles({ padding: styles?.padding }) : 'px-4 py-28'
            )}
            {...getDataAttrs(props)}
        >
            {backgroundVideo?.url && (
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={backgroundVideo.url}
                    autoPlay={backgroundVideo.autoplay ?? true}
                    loop={backgroundVideo.loop ?? true}
                    muted={backgroundVideo.muted ?? true}
                    playsInline
                    controls={backgroundVideo.controls ?? false}
                    style={{ opacity: ((backgroundVideo.opacity ?? 100) as number) * 0.01 }}
                />
            )}
            {backgroundImage && <BackgroundImage {...backgroundImage} className="absolute inset-0" />}
            {backgroundVideo?.url && (
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: [
                            'linear-gradient(to right, rgba(106,13,173,0.42), rgba(106,13,173,0.12) 24%, rgba(106,13,173,0.12) 76%, rgba(106,13,173,0.42))',
                            'linear-gradient(to bottom, rgba(106,13,173,0.34), rgba(106,13,173,0.08) 28%, rgba(106,13,173,0.08) 72%, rgba(106,13,173,0.34))',
                            'linear-gradient(to bottom, rgba(0,0,0,0.42), rgba(0,0,0,0.42))'
                        ].join(', ')
                    }}
                />
            )}
            <div className="w-full max-w-7xl mx-auto relative">{children}</div>
        </div>
    );
}
