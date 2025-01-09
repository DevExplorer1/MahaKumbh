import React from 'react';

const items = [
    {
        title: 'Mega Solar Farm',
        description: 'Pioneering a brighter future, Solvista builds innovative solar farms that deliver affordable, clean energy while empowering communities with sustainable solutions.',
        imageUrl: 'solar.jpg',
        link: '#'
    },
    {
        title: 'Green Hydro Farm',
        description: 'Driving the transition to a greener world, EcoSphere Energy specializes in innovative renewable solutions, harnessing wind, solar, and hydro power to create a sustainable tomorrow.',
        imageUrl: 'farm.jpg',
        link: '#'
    }
];

const MainComponent = () => {
    return (
        <div className="container my-5">
            <div className="row">
                {items.map((item, index) => (
                    <div className="col-md-12 mb-4" key={index} style={{height:'200px'}} >
                        <div className='card' style={{height:'200px'}} >
                            <div className="row">
                                <div className='col-md-4'>
                                    <img src={item.imageUrl} className="card-img-top p-1" style={{ height: '60%', width: "20rem" }} alt={item.title} />

                                </div>
                                <div className='col-md-8'>

                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <a href={item.link} className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainComponent;
