import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import Section from '../Section';
import VideoBlock from '../../blocks/VideoBlock';

export default function VideoGallerySection(props) {
    const { elementId, colors, backgroundImage, landscapeVideo, portraitVideos = [], styles = {} } = props;

    return (
        <Section
            elementId={elementId}
            className="sb-component-video-gallery-section"
            colors={colors}
            backgroundImage={backgroundImage}
            styles={styles?.self}
            {...getDataAttrs(props)}
        >
            <div className={classNames('w-full', 'flex', 'flex-col', 'gap-8', mapStyles({ alignItems: styles?.self?.justifyContent ?? 'center' }))}>
                {landscapeVideo?.url && <VideoBlock {...landscapeVideo} className="w-full" />}
                {portraitVideos.length > 0 && (
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                        {portraitVideos.map((video, index) => (
                            <VideoBlock key={index} {...video} className="w-full max-w-[28rem] md:justify-self-center" />
                        ))}
                    </div>
                )}
            </div>
        </Section>
    );
}
