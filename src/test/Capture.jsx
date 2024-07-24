import React, {useState, useEffect} from 'react';

function Capture(props) {
  const [hidden, setHidden] = useState(false);

  const handleKeyDown = (e) => {
    console.log(`Key: ${e.key}, Code: ${e.code}, MetaKey: ${e.metaKey}, ShiftKey: ${e.shiftKey}, CtrlKey: ${e.ctrlKey}`);
    if (
      //(e.key === 'PrintScreen' || e.code === 'PrintScreen') 
      (e.metaKey && e.shiftKey )
    )
    {
      e.preventDefault();
      setHidden(true);
      setTimeout(() => setHidden(false), 1000); // 1초 후에 다시 콘텐츠를 표시합니다.
    }
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const keydownListener = (e) => {
      handleKeyDown(e);
    };
    window.addEventListener('keydown', keydownListener);
    return () => {
      window.removeEventListener('keydown', keydownListener);
    };
  }, []);

  return (
    <>
      <div 
        className={`protected-content ${hidden ? 'hidden' : ''}`}
        onContextMenu={handleContextMenu}
      >
        testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
        testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
        testtesttesttesttesttesttesttesttesttesttesttesttest
      </div>
      {hidden && <div className="overlay">캡쳐 금지</div>}
    </>
  );
}

export default Capture;