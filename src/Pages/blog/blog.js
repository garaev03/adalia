import { useState, useEffect } from 'react';
import Loading from "../../components/loading/loading"
import Image2 from '../../image.jpg'
import './blog.css'

function Blog() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        window.scrollTo({ top: 0 })
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])

    return (
        <div>
            {
                loading ?
                    <Loading /> :
                    <div>
                        <div className='cap '>
                            <img class="blog-cap" src={Image2} />
                            <div class="centered">Digital Marketing Blogs</div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pl-5   ">
                            <div className="card">
                                <img src={Image2} alt="Card" width={400} />
                                <h2>2023 Digital Marketing Forecast: Unveiling Emerging Technologies and Trends</h2>
                                <h3>1920</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>

                            <div className="card">
                                <img src={Image2} alt="Card" width={400} />
                                <h2>2023 Digital Marketing Forecast: Unveiling Emerging Technologies and Trends</h2>
                                <h3>19 July 1920</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>

                            <div className="card">
                                <img src={Image2} alt="Card" width={400} />
                                <h2>2023 Digital Marketing Forecast: Unveiling Emerging Technologies and Trends</h2>
                                <h3>19 July 1920</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>

                            <div className="card">
                                <img src={Image2} alt="Card" width={400} />
                                <h2>2023 Digital Marketing Forecast: Unveiling Emerging Technologies and Trends</h2>
                                <h3>19 July 1920</h3>
                                <p> </p>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Blog