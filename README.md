# React useEffect Hook Infinite Loop

This repository demonstrates a common error in React applications involving the `useEffect` hook: creating an infinite loop by incorrectly updating state within the dependency array. 

## Bug Description
The `MyComponent` component uses `useEffect` to increment a counter. However, the dependency array `[count]` includes the `count` state variable. Every time `count` changes, the `useEffect` hook runs again, causing an infinite loop as `setCount(count + 1)` triggers another state update and another re-render. 

## Solution
The solution involves removing `count` from the dependency array or using a different state management approach to avoid the infinite loop. 

## How to reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the browser console for errors. The component will likely crash or the browser may become unresponsive.
