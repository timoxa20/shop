import React from 'react'
import { Image } from 'react-bootstrap'
import dvijoc from '../shared/assets/dvigatel.png'
import Stock from '../style/ctock.module.css'


const StocksItem = ({ value }) => {
    return (
        <div>
            {value.map(post => 
            <div key={Date.now()}>
                 <div className={Stock.Stok}>
                <div className={Stock.StockTop}>
                    <div className={Stock.Stock}>АКЦИЯ</div>
                    <div>
                        <div className={Stock.StockBold}>{post.newprice}</div>
                        <div className={Stock.StockNormal}>{post.oldprice}</div>
                    </div>
                </div>
                <div className={Stock.StockBlockImg}>
                    <Image src={dvijoc} />
                    <div className={Stock.StockText}>Лодочный мотор <br /> Suzuki DF9.9BRS</div>
                </div>
                <div className={Stock.Text}>Акция действует до <span><br />{post.stoc}</span></div>
            </div> 
            </div>
            )}    
        </div>
    )
}

export default StocksItem
