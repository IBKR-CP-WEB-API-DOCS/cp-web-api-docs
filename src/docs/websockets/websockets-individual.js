const websocketsInstitutional = [
    {
        category: 'Market Data',
        items: [
            {
                id: 'streaming-data',
                title: 'Streaming Data',
                content: `
                <p>
                    Donec quis venenatis mi, in finibus neque. Vestibulum molestie felis vel metus tempus scelerisque. Suspendisse in magna viverra, sollicitudin lacus sed, porttitor libero. Nam faucibus risus ligula, eu ultrices risus lacinia et. Nunc porttitor magna eget euismod dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus pulvinar tristique elit, consectetur consectetur elit facilisis vel.  
                </p>
                <p>
                    Donec quis venenatis mi, in finibus neque. Vestibulum molestie felis vel metus tempus scelerisque. Suspendisse in magna viverra, sollicitudin lacus sed, porttitor libero. Nam faucibus risus ligula, eu ultrices risus lacinia et. finibus neque. Vestibulum molestie felis vel metus tempus scelerisque. Suspendisse in magna.
                </p>
                <h5>Request close price and day percent change for APPL contract</h5>
                <p>
                    In order to request streaming market data, a subscription request must first be sent for the specific contract. In this case, we know that the APPL@NASDAQ contract
                    has a contract ID of 265598. In addition, we must also specify the fields that should be returned. In this case we are interested in fields 31 - close price, and 83 - the % change, or difference between the last price and the close price for the previous day.
                    For a list of available tags, please see the <a href='/endpoints'>endpoint explorer</a>.  
                </p>
                <div class='code'>
                    <code>
                        smd+265598+{"fields":["31","83"]}
                    </code>
                </div>
                `
            },
            {
                id: 'historical-data',
                title: 'Historical Data',
                content: 'Donec quis venenatis mi, in finibus neque. Vestibulum molestie felis vel metus tempus scelerisque. Suspendisse in magna viverra, sollicitudin lacus sed, porttitor libero. Nam faucibus risus ligula, eu ultrices risus lacinia et. Nunc porttitor magna eget euismod dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus pulvinar tristique elit, consectetur consectetur elit facilisis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla a luctus turpis. Cras elementum tincidunt dictum. Vivamus euismod tempor dolor rhoncus pulvinar. Fusce a metus quis sem ullamcorper iaculis nec sit amet dolor. Etiam ac vestibulum urna, ac consequat nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at interdum dolor, ut volutpat odio. Sed et erat sagittis, interdum elit id, tristique elit.',
            } 
        ]
    },
    {
        category: 'Account Operations',
        items: [
            {
                id: 'daily-pnl',
                title: 'Daily PnL',
                content: 'Sed scelerisque odio in felis varius semper. Aliquam id orci sed nibh tincidunt vulputate sit amet vel risus. Aenean maximus, arcu in tincidunt dictum, nisi velit blandit nunc, eu vestibulum nulla neque vitae nisi. Sed nibh felis, viverra nec consectetur in, posuere ut lectus. Morbi venenatis, quam ut scelerisque porta, sapien dolor aliquam neque, pulvinar molestie augue ante vel sem. Nulla ullamcorper quam nisi, vitae interdum orci pharetra ut. Etiam ultricies rutrum ante vel pretium. Vivamus id elit efficitur, dictum magna a, ultrices orci. Phasellus iaculis odio a vehicula iaculis. Sed sed consectetur tortor. Fusce nulla massa, lobortis nec consequat vel, iaculis id nibh. Vestibulum placerat suscipit erat eget mattis. Fusce mi augue, blandit et molestie id, facilisis nec quam. Nullam commodo odio eget pulvinar dignissim. Proin dignissim ultricies fermentum. Nunc a augue ut nibh vestibulum mollis in ut odio.',
            },
            {
                id: 'positions',
                title: 'Account Positions',
                content: 'Ut vulputate leo eget sem auctor pellentesque. Pellentesque quis scelerisque ligula. Vivamus a pharetra urna. Sed vitae sapien sem. Aenean in nisi ex. Praesent vel ipsum gravida, elementum est nec, lobortis nisl. Integer eget quam tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vitae placerat nunc. Maecenas lobortis euismod elit vitae sodales.',
            },
            {
                id: 'switch-account',
                title: 'Switch Account',
                content: 'Donec at tellus bibendum, auctor arcu ac, lobortis lorem. Nunc porttitor orci est, eu commodo arcu vehicula in. Quisque ut mauris euismod, molestie turpis id, posuere massa. Proin sed lacus et lacus pellentesque aliquet vel sed diam. Sed tempor lacinia varius. Proin mattis posuere justo, id sagittis orci. Sed fermentum nisl risus. Vestibulum pharetra, leo vitae posuere sodales, nisl turpis dictum nisi, mollis fermentum eros sem ac enim. Nullam in arcu hendrerit, dictum justo eu, cursus odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam vel faucibus ex. Nam pellentesque metus at tempus ultrices. Etiam bibendum gravida rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vel tellus eget quam molestie ullamcorper a ut urna. Mauris sit amet dui rutrum lorem scelerisque euismod non et mauris.',
            },
        ]
    },
]

export default websocketsInstitutional;