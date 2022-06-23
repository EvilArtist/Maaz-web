
$(() => {

    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    color1: getComputedStyle(document.body ).getPropertyValue('--color1').trim(),
                    color2: getComputedStyle(document.body ).getPropertyValue('--color2').trim(),
                    color3: getComputedStyle(document.body ).getPropertyValue('--color3').trim(),
                    color4: getComputedStyle(document.body ).getPropertyValue('--color4').trim(),
                    color5: getComputedStyle(document.body ).getPropertyValue('--color5').trim(),
                }
            },
            fontSize: {
                'lg': ['44px', {
                    lineHeight: '48px',
                    fontWeight: '700'
                }],
                'hl': ['20px', {
                    lineHeight: '24px',
                    fontWeight: '400'
                }],
                'title': [
                    '32px',
                    {
                        lineHeight: '40px',
                    }
                ]
            },
            zIndex: {
                '1': '1',
                '2': '2',
            }
        }
    }
});