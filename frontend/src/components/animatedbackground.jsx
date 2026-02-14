import Noise from './Noise'

const AnimatedBackground = () => {
  return (
    <>
      {/* Noise overlay */}
      <Noise patternAlpha={18} patternRefreshInterval={2} />
    </>
  )
}

export default AnimatedBackground
