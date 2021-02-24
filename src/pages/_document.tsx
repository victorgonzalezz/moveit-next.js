import Document, { Html, Head, Main, NextScript } from 'next/document';
// Porque criar o document e não colocar na app?
// Porque ele carrega uma única vez
//Numa visita do usuário na nossa aplicação.
//Por essa razão eu coloco tudo aqui o que for estático.
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          
        </body>
        
      </Html>
    );
  }
}