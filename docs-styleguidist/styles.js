module.exports = {
    theme: {
        maxWidth: '100%',
        sidebarWidth: 250,
        color: {
            link: '#5856d6',
            linkHover: 'rgb(70, 69, 171)',
            sidebarBackground: '#7957d5',
            errorBackground: '#e22d44'
        }
    },
    styles: {
        StyleGuide: {
            root: {
                'text-rendering': 'optimizeLegibility',
                '-moz-osx-font-smoothing': 'grayscale',
                '-webkit-font-smoothing': 'antialiased'
            },
            sidebar: {},
            content: {},
            logo: {
                border: 'none',
                paddingBottom: 0
            }
        },
        Logo: {
            logo: {
                color: '#fff',
                fontSize: 20
            }
        },
        ComponentsList: {
            list: {
                '& ul': {
                    paddingLeft: 0
                }
            },
            item: {
                '& a': {
                    'color': 'rgba(255, 255, 255, 0.9) !important',
                    'fontWeight': 500,
                    '&:hover': {
                        textDecoration: 'underline',
                        color: '#fff !important'
                    }
                }
            },
            heading: {
                fontSize: '18px !important',
                fontWeight: '600 !important',
                color: '#fff !important'
            }
        }
    }
}
