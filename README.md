useEffect is used to perform side effects like data fetching, subscriptions, or DOM updates.

Adding conditions inside useEffect helps control when the effect should run.

Conditions are usually combined with the dependency array.

The effect runs only when the specified dependencies change and the condition is met.

This prevents unnecessary executions and improves performance.

Common use cases include API calls based on state, validation checks, and conditional logging.

Always place conditional logic inside the useEffect callback, not around it.

Proper conditional usage avoids infinite loops and unwanted side effects.

Cleanup functions can also be conditionally handled if required.
