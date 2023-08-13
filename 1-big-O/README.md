# Big O

Big O is a way to categorize your algorithm's time or memory requirements based on input. It is not meant to be an exact measurement. It will not tell you how many CPU cycles it takes, instead, it is meant to generalize the growth of your algorithm.

## Big O, said differently

As your input grows, how fast does computation or memory grow?

## Important concepts

- constants are dropped
- worst case is usually the way we measure,
- growth is with respect to the input

## Big O Complexity Chart

| Big O      | Name         |
| ---------- | ------------ |
| O(1)       | Constant     |
| O(log n)   | Logarithmic  |
| O(n)       | Linear       |
| O(n log n) | Linearithmic |
| O(n^2)     | Quadratic    |
| O(n^3)     | Cubic        |
| O(2^n)     | Exponential  |
| O(n!)      | Factorial    |

![Big O Chart](/images/big-o-face.png)

## Big O Examples

### O(1) - Constant

```python
def constant_algo(items):
    result = items[0] * items[0]
    print(result)
```

### O(n) - Linear

```python
def linear_algo(items):
    for item in items:
        print(item)
```

### O(n^2) - Quadratic

```python
def quadratic_algo(items):
    for item in items:
        for item2 in items:
            print(item, ' ', item2)
```

### O(n^3) - Cubic

```python
def cubic_algo(items):
    for item in items:
        for item2 in items:
            for item3 in items:
                print(item, ' ', item2, ' ', item3)
```

### O(log n) - Logarithmic

```python
def logarithmic_algo(items):
    for index in range(0, len(items), 3):
        print(items[index])
```

### O(n log n) - Linearithmic

```python
def linearithmic_algo(items):
    for item in items:
        for item2 in items:
            print(item, ' ', item2)
    for item in items:
        print(item)
```

### O(2^n) - Exponential

```python
def exponential_algo(items):
    if len(items) == 0:
        return 1
    else:
        item = items.pop()
        return exponential_algo(items) + exponential_algo(items)
```

### O(n!) - Factorial

```python
def factorial_algo(items):
    if len(items) == 0:
        return 1
    else:
        return len(items) * factorial_algo(items[:-1])
```

## Big O Cheat Sheet

### Big Os

- O(1) Constant- no loops
- O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
- O(n) Linear- for loops, while loops through n items
- O(n log(n)) Log Linear- usually sorting operations
- O(n^2) Quadratic- every element in a collection needs to be compared to every other element. Two nested loops
- O(2^n) Exponential- recursive algorithms that solve a problem of size N
- O(n!) Factorial- you are adding a loop for every element
- Iterating through half a collection is still O(n)
- Two separate collections: O(a \* b)
- What can cause time in a function?:
  - Operations (+, -, \*, /)
  - Comparisons (<, >, ==)
  - Looping (for, while)
  - Outside Function call (function())
