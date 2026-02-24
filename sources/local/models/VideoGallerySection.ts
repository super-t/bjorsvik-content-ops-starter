import { Model } from '@stackbit/types';

export const VideoGallerySection: Model = {
    type: 'object',
    name: 'VideoGallerySection',
    label: 'Video Gallery',
    fields: [
        {
            type: 'model',
            name: 'landscapeVideo',
            label: 'Landscape video',
            required: false,
            hidden: false,
            localized: false,
            models: ['VideoBlock']
        },
        {
            type: 'list',
            name: 'portraitVideos',
            label: 'Portrait videos',
            required: false,
            hidden: false,
            localized: false,
            items: {
                type: 'model',
                models: ['VideoBlock']
            }
        },
        {
            type: 'string',
            name: 'elementId',
            label: 'Element ID',
            description: 'The unique ID for an HTML element, must not contain whitespace',
            required: false,
            default: '',
            hidden: false,
            localized: false,
            group: 'settings'
        },
        {
            type: 'enum',
            name: 'colors',
            label: 'Colors',
            description: 'The color theme of the section',
            required: false,
            default: 'bg-light-fg-dark',
            hidden: false,
            localized: false,
            options: [
                {
                    label: 'Light background, dark foreground',
                    value: 'bg-light-fg-dark',
                    textColor: '$dark',
                    backgroundColor: '$light',
                    borderColor: '#ececec'
                },
                {
                    label: 'Neutral background, dark foreground',
                    value: 'bg-neutral-fg-dark',
                    textColor: '$dark',
                    backgroundColor: '$neutral',
                    borderColor: '#ececec'
                },
                {
                    label: 'Dark background, light foreground',
                    value: 'bg-dark-fg-light',
                    textColor: '$light',
                    backgroundColor: '$dark',
                    borderColor: '#ececec'
                }
            ],
            group: 'styles',
            controlType: 'palette'
        },
        {
            type: 'model',
            name: 'backgroundImage',
            label: 'Background image',
            required: false,
            hidden: false,
            localized: false,
            models: ['BackgroundImage'],
            group: 'styles'
        },
        {
            type: 'style',
            name: 'styles',
            label: 'Styles',
            description: 'The styles field is controlled by Netlify Create editor',
            required: false,
            hidden: false,
            localized: false,
            styles: {
                self: {
                    margin: ['tw0:96'],
                    padding: ['tw0:96'],
                    justifyContent: ['flex-start', 'flex-end', 'center']
                }
            }
        }
    ],
    fieldGroups: [
        {
            name: 'styles',
            label: 'Styles',
            icon: 'palette'
        },
        {
            name: 'settings',
            label: 'Settings',
            icon: 'gear'
        }
    ]
};
