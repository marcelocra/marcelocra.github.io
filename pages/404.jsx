export default function Custom404() {
  return (
    <div style={{ height: '100vh' }}>
      <img className="object-cover origin-center h-full w-full" src="/images/404.jpg" alt="Casa abandonada" />
      <div className="msg-pos text-xs md:text-xl xl:text-3xl">Nope... (404)</div>
      <div className="text-xs">
        <span className="attr-pos">
          Photo by
          {' '}
          <a href="https://unsplash.com/@gxpana?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Greg Panagiotoglou</a>
          {' '}
          on
          {' '}
          <a href="https://unsplash.com/s/photos/abandoned-house?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
        </span>
      </div>
      <style jsx>
        {`
        .msg-pos {
          color: white;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .attr-pos {
          color: white;
          position: absolute;
          right: 5%;
          bottom: 5%;
        }
      `}

      </style>
    </div>
  );
}
