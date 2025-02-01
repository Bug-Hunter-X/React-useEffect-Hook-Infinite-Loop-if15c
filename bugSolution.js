```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: use a variable outside the dependency array
    let interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval); //cleanup function
  }, []); // Empty dependency array means this runs only once on mount

  return <div>Count: {count}</div>;
}
```