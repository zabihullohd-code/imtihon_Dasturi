import React from 'react'
import './Mrizo.css'
const Mrizo = () => {
    return (
        <div className='site'>
            <div className="orta">
                <h1>Testimony</h1>
                <h1>Happy customers</h1>
                <div className="box">
                    <h1>Maria</h1>
                    <p> Я всегда был  самым худым и щуплым ребенком</p>
                    <p>среди своих сверстников. Я всегда мечтал стать</p>
                    <p>как мой кумир и иметь интерес...</p>
                    <i class="fa-regular fa-calendar"></i><p>06/02/2022</p> <i class="fa-regular fa-clock"></i> <p>11:15</p> <i class="fa-regular fa-eye"></i> <p>222</p>
                </div>
            </div>
            <div className="card">
                        <img src={rasm1} alt="" />
                        <h2 className='v1'>Tips for prepping and caring for your grill</h2>
                        <p className='v2' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                        <div className="card1">

                        <p className='v3'>Read More</p>
                        <p className='v4'>16 Apr 2021</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={rasm1} alt="" />
                        <h2 className='v1'>Tips for prepping and caring for your grill</h2>
                        <p className='v2' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                        <div className="card1">

                        <p className='v3'>Read More</p>
                        <p className='v4'>16 Apr 2021</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={rasm1} alt="" />
                        <h2 className='v1'>Tips for prepping and caring for your grill</h2>
                        <p className='v2' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                        <div className="card1">

                        <p className='v3'>Read More</p>
                        <p className='v4'>16 Apr 2021</p>
                        </div>
                    </div>
        </div>
    )
}

export default Mrizo