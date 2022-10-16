import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {
    // cmd+. ver acciones
    // cmd+space abrir buscador general de mac
    // crtl+cmd+space emojis 😃
    // ctr+space ver ociones de los objetos
    // Cambiar referencia fn+f2

    const {
        counter,
        elementToAnimate,
        handleClick
    } = useCounter({
        maxCount: 15
    })

    return (
        <>
            <h1>CounterHook:</h1>
            <h2 ref={elementToAnimate}>{counter}</h2>
            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}