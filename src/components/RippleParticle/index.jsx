import './styles.scss';
import * as THREE from 'three';
import { Html  } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import circleImg from '../../assets/circle.png';
import { motion } from "framer-motion";

import { Suspense, useCallback, useEffect, useMemo, useRef,useState } from 'react';





const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};


const Ring = ({position,text,onClick}) => {


  return (
      <Html  
      position={position} 
      center
      className='ring__container'
    
      >
        <motion.div  
          whileHover={{ scale: 1.2 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{duration: 0.1 }}
        onClick={onClick}
        className="ring__container__text">
          {text}
        </motion.div>
      </Html>
  );
};


function Diamond({PointerIn,color,showRings})
{
  // =======================STATES================
  const [ishover,setIsHover]=useState(false);
  const [t,setT]=useState(0);
  // ======================REFs=======================
  const meshRef= useRef()

  // ========================LOGIC=======================
  let f=0.002;
  let a=3;

  const handleDownload = () => {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/data/Resume.pdf`; // Adjust the path to your PDF
    link.download = 'Resume.pdf'; // The name you want for the downloaded file
    document.body.appendChild(link);
    link.click(); // Programmatically click the link to trigger the download
    document.body.removeChild(link); // Clean up and remove the link element
  };

  useFrame(() => {
    // console.log("DIAMOND USEFRAME");
    setT(prevT => prevT + 40);
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y =15 + Math.sin(f*t)*a ;
    }
  });

  return(
    <mesh 
    ref={meshRef} 
    scale={showRings? [1,1,1]:[1,2,1] }
    onClick={()=>{
      setIsHover(true);
      PointerIn();

    }}
    onPointerEnter={()=>{
      setIsHover(true);
      PointerIn();

    }}
    onPointerLeave={()=>{setIsHover(false)}}
    
    >
      {
        showRings?
        <sphereGeometry args={[3, 32, 32]} />
        :<octahedronGeometry args={[3,0]}  />
      }

      <meshStandardMaterial
        color={color}                 
        emissive={color} 
        emissiveIntensity={ishover? 2.5:1} 
        transparent={true}
        
      />

      
    </mesh>
  )


}


function Points({color}) {
  const imgTex = useLoader(THREE.TextureLoader, circleImg);
  const bufferRef = useRef();
  const [t, setT] = useState(0);
  const f = 0.002;
  const a = 3;
  const count = 100;
  const sep = 3;

  const graph = useCallback((x, z) => {
    return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
  }, [a, f, t]);

  const positions = useMemo(() => {
    const positionsArray = [];
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x, z);
        positionsArray.push(x, y, z);
      }
    }
    return new Float32Array(positionsArray);
  }, [count, sep, graph]);

  useFrame(() => {
    setT(prevT => prevT + 40);  // Increment t using state

    const positionArray = bufferRef.current.array;
    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        positionArray[i + 1] = graph(x, z);
        i += 3;
      }
    }
    bufferRef.current.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={imgTex}
        color={color}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
}



function AnimationCanvas({handleFolderpanel}) {

  // =======================================================
  // CONSIDERING A SAMPLE DATA

  const [showRings,setShowRings]= useState(false);
  const rootStyles = getComputedStyle(document.documentElement);
  const primaryColor = rootStyles.getPropertyValue('--yellow-theme-main-color').trim();

  const data=[
      {
        label:"Skills",
      position:[0,15,15]
    },
    {
      label:"Experience",
      position:[0,30,0]
    },
    {
      label:"Projects",
      position:[0,15,-15]
    },
  ]



  console.log("canvas rerender")
  return (
    <Canvas

      camera={{ position: [100, 10, 0], fov: 75 }}
    >
      <ambientLight intensity={1}/>
      pointLight position={[100, 10, 0]} intensity={7.5} />
      <Suspense fallback={null}>
        <Points color={primaryColor}/>
        <Diamond 
               color={primaryColor}
                PointerIn={()=>{setShowRings(true)}}
                showRings={showRings}
        />

        {
           showRings? data.map((item,key)=>{
              return(<Ring
                onClick={()=>{
                  setShowRings(false);
                  handleFolderpanel(item.label);
                }}
                key={key}
                position={item.position} 
                text={item.label}
                />
              )
          }):<Ring
          position={[0,35,0]} 
          text={"Hover on diamond"}/>
        }
      </Suspense>
    </Canvas>
  );
}

const RippleParticle=(({handleFolderpanel})=>{
  

    return(
        <div className= "anim">

            <Suspense fallback={<div>Loading...</div>}>


                <AnimationCanvas
                handleFolderpanel={handleFolderpanel}
             
                />

            </Suspense>
        </div>
    )


}
)
export default RippleParticle;