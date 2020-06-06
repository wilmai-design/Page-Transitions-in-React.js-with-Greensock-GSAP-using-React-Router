import React, {useEffect , useRef} from "react";

const Title = ({ lineContent, lineContent2 }) => {

    let line1 = useRef(null);
    let line2 = useRef(null);

    return (
        <h1 className='page-title'>
            <div className="line-wrap">
                <div ref={el => line1 = el} className="line">
                    {lineContent}
                </div>
            </div>

            <div className="line-wrap">
                <div ref={el => line2 = el} className="line">
                    {lineContent2}
                </div>
            </div>


        </h1>
    );
};

export default Title;