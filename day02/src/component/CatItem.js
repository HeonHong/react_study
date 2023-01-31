import React from 'react';


//한개의 데이터에 관한 틀
const CatItem = ({item}) => {
    const {id, img, title} = item
    return (
        <div>
            <li>
                <a href>
                    <div><img src={img}></img></div>
                    <h3>
                        {title}
                    </h3>
                </a>

            </li>
        </div>
    );
};

export default CatItem;