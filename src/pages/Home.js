import React from 'react'
import SearchBarCmp from '../components/SearchBar/SearchBarCmp'
import HotelDetailCmp from '../components/HotelDetail/HotelDetailCmp'

function Home() {
    return (
        <div>
            <SearchBarCmp/>
                <div className="row">
                    <div className="col-4">
                    <HotelDetailCmp/>
                    </div>
                    <div className="col-4">
                    <HotelDetailCmp/>
                    </div>
                    <div className="col-4">
                    <HotelDetailCmp/>
                    </div>
                </div>
        </div>

    )
}

export default Home