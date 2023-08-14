import { useState, useEffect } from 'react';
import Loading from "../../components/loading/loading"

function Home() {
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
            home
          </div>
      }
    </div>

  )
}

export default Home