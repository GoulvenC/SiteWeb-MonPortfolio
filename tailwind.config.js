module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.js',
    ],
    theme: {
        fontFamily: {
            display: ['Source Code Pro'],
            body: ['Be Vietnam'],
            title: ['Inter'],
        },
        extend: {
            colors: {
                body: '#1C1E26',
                area: '#232530',
                'area-2': '#16161C',
                font: '#ebebeb',
                'font-2': '#B9B9B9',
                'font-3': '#9496a8',
                primary: '#E95678',
                secondary: '#F09383',
                active: '#25B2BC',
            },

            lineHeight: {
                articleTitle: '0.95',
            },

            inset: {
                '1px': '1px',
                20: '20px',
            },

            height: {
                featuredClass: '19rem',
                150: '15rem',
                200: '20rem',
            },

            minHeight: {
                7: '7rem',
            },

            width: {
                150: '15rem',
                400: '40rem',
                700: '70%',
                900: '90%',
                1000: '100vw',
            },

            maxWidth: {
                form: '500px',
                post: '700px',
                content: '800px',
                900: '90%',
                1000: '100vw',
            },

            minWidth: {
                6: '6rem',
            },

            margin: {
                content: '18rem',
            },
            gridTemplateColumns: {
                cont: '17% 60% 15%',
            },
            gap: {
                col: '3%',
            },
            fontSize: {
                404: '7rem',
            },
        },
    },
    variants: {},
    plugins: [
        ({ addBase, addComponents, config }) => {
            addBase({
                html: {
                    backgroundColor: config('theme.backgroundColor.body'),
                },
                p: {
                    color: config('theme.textColor.font'),
                    fontFamily: config('theme.fontFamily.body'),
                    fontSize: config('theme.fontSize.base'),
                    lineHeight: '1.5',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                },

                a: {
                    color: config('theme.textColor.primary'),
                    textDecoration: 'none',
                    borderStyle: 'solid',
                    borderBottomWidth: '1px',
                    borderColor: config('theme.textColor.primary'),

                    '&:hover': {
                        color: config('theme.textColor.secondary'),
                        borderColor: config('theme.textColor.secondary'),
                    },
                },

                img: {
                    maxWidth: '100%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    borderRadius: '0.5rem',
                },

                h2: {
                    color: config('theme.textColor.font'),
                    fontFamily: config('theme.fontFamily.title'),
                    fontSize: config('theme.fontSize.2xl'),
                    fontWeight: '700',
                    lineHeight: '1.25',
                    letterSpacing: config('theme.letterSpacing.title'),
                    marginTop: '1rem',
                    marginBottom: '1rem',
                },

                h3: {
                    color: config('theme.textColor.font'),
                    fontFamily: config('theme.fontFamily.title'),
                    fontSize: config('theme.fontSize.xl'),
                    fontWeight: '700',
                    lineHeight: '1.5',
                    letterSpacing: config('theme.letterSpacing.title'),
                    marginTop: '2rem',
                    marginBottom: '0.5rem',
                },

                h5: {
                    color: config('theme.textColor.font-2'),
                    fontFamily: config('theme.fontFamily.title'),
                    fontWeight: '600',
                    textAlign: 'center',
                    lineHeight: '1.5',
                    letterSpacing: config('theme.letterSpacing.title'),
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '1rem',
                    marginTop: '1rem',
                },

                ul: {
                    color: config('theme.textColor.font'),
                    lineHeight: config('theme.lineHeight.normal'),
                },

                ol: {
                    color: config('theme.textColor.font'),
                    lineHeight: config('theme.lineHeight.normal'),
                },

                table: {
                    color: config('theme.textColor.font'),
                    fontFamily: config('theme.fontFamily.body'),
                    fontSize: config('theme.fontSize.xl'),
                    lineHeight: config('theme.lineHeight.normal'),
                    width: 'auto',
                    maxWidth: '100%',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    borderSpacing: '0',
                    tableLayout: 'fixed',
                },

                td: {
                    borderBottomWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: config('theme.textColor.font-2'),
                    margin: '1rem',
                    textAlign: 'top',
                },

                th: {
                    borderBottomWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: config('theme.textColor.font-2'),
                    margin: '1rem',
                    textAlign: 'top',
                },

            });
            addComponents({
                '.smooth': {
                    scrollBehavior: 'smooth',
                },
            });
        },
    ],
};
