import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap'

export const useCounter = ({ maxCount = 1 }) => {
    const [ counter, setCounter ] = useState(5);
    const elementToAnimate = useRef<any>(null)

    // Almacena la referencia em memoria una vez
    // para usarlo se usa el .current
    const tl = useRef( gsap.timeline() );

    const handleClick = () => {
        setCounter(prev => Math.min(prev+1, maxCount) )
    }
    
    // useLayoutEffect despues de que carglo el html
    useLayoutEffect(() => {

        if(!elementToAnimate.current) return 
        
        tl.current.to(elementToAnimate.current, {y: -10, duration: 0.2, ease: 'ease.out'})
                  .to(elementToAnimate.current, {y: 0, duration: 1, ease: 'bounce.out'})
                  .pause()
        
        // función de cleanup
        // se ejecuta cuando el componente va a ser destruido
        // return () => {
            // }
        }, [])
        
    useEffect(() => {
        if (counter < maxCount ) return

        console.log('%cLlego al valor máximo', 'color: white; background: red;')
        tl.current.play()
            
    }, [counter, maxCount])

    return {
        counter,
        elementToAnimate,
        handleClick,
    }
}