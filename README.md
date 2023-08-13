# Algorithms

## Table of Contents

- [Algorithms](#algorithms)
  - [Table of Contents](#table-of-contents)
  - [Useful Links](#useful-links)
  - [Big O](#big-o)
    - [Big O in a Nutshell](#big-o-in-a-nutshell)
    - [Key Concepts](#key-concepts)
    - [Big O Complexity Chart](#big-o-complexity-chart)
    - [Big O Examples](#big-o-examples)
      - [O(1) - Constant](#o1---constant)
      - [O(n) - Linear](#on---linear)
      - [O(n^2) - Quadratic](#on2---quadratic)
      - [O(n^3) - Cubic](#on3---cubic)
      - [O(log n) - Logarithmic](#olog-n---logarithmic)
      - [O(n log n) - Linearithmic](#on-log-n---linearithmic)
      - [O(2^n) - Exponential](#o2n---exponential)
      - [O(n!) - Factorial](#on---factorial)
    - [Big O Cheat Sheet](#big-o-cheat-sheet)
      - [Common Big O Cases](#common-big-o-cases)
  - [Arrays](#arrays)
    - [Important Concepts](#important-concepts)
    - [Examples](#examples)
      - [Creating an Array](#creating-an-array)
      - [Getting an Element at a Specific Index](#getting-an-element-at-a-specific-index)
      - [Insertion at a Specific Index](#insertion-at-a-specific-index)
      - [Deletion at a Specific Index](#deletion-at-a-specific-index)
    - [Big O of Dynamic Array Methods](#big-o-of-dynamic-array-methods)
    - [Big O of Fixed-Size and Fixed-Type Arrays](#big-o-of-fixed-size-and-fixed-type-arrays)
    - [Big O of Algorithms](#big-o-of-algorithms)
  - [Search](#search)
    - [Linear Search](#linear-search)
      - [Description](#description)
      - [Use Cases](#use-cases)
      - [Implementation](#implementation)

## Useful Links

- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)

## Big O

Big O notation is a way to categorize an algorithm's time or memory requirements based on its input size. It provides a high-level understanding of how an algorithm's performance scales as the input grows. While it doesn't give precise measurements in terms of CPU cycles, it helps us understand the general growth pattern of the algorithm.

### Big O in a Nutshell

As the size of the input grows, how does the computational time or memory usage of the algorithm change?

### Key Concepts

- **Constants Are Dropped:** In Big O analysis, constant factors and lower-order terms are ignored since they have less impact on the overall growth rate.
- **Worst Case Complexity:** Typically, the worst-case scenario is used to measure an algorithm's complexity.
- **Growth Relative to Input:** The Big O notation describes the growth of an algorithm's efficiency in relation to the size of the input.

### Big O Complexity Chart

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

### Big O Examples

#### O(1) - Constant

Python:

```python
def constant_algo(items):
    result = items[0] * items[0]
    print(result)
```

Typescript:

```typescript
function constantAlgo(items: number[]): void {
	const result = items[0] * items[0];
	console.log(result);
}
```

C#:

```csharp
void ConstantAlgo(int[] items) {
    int result = items[0] * items[0];
    Console.WriteLine(result);
}
```

#### O(n) - Linear

Python:

```python
def linear_algo(items):
    for item in items:
        print(item)
```

Typescript:

```typescript
function linearAlgo(items: number[]): void {
	for (const item of items) {
		console.log(item);
	}
}
```

C#:

```csharp
void LinearAlgo(int[] items) {
    foreach (int item in items) {
        Console.WriteLine(item);
    }
}
```

#### O(n^2) - Quadratic

Python:

```python
def quadratic_algo(items):
    for item in items:
        for item2 in items:
            print(item, ' ', item2)
```

Typescript:

```typescript
function quadraticAlgo(items: number[]): void {
	for (const item of items) {
		for (const item2 of items) {
			console.log(item, " ", item2);
		}
	}
}
```

C#:

```csharp
void QuadraticAlgo(int[] items) {
    foreach (int item in items) {
        foreach (int item2 in items) {
            Console.WriteLine(item + " " + item2);
        }
    }
}
```

#### O(n^3) - Cubic

Python:

```python
def cubic_algo(items):
    for item in items:
        for item2 in items:
            for item3 in items:
                print(item, ' ', item2, ' ', item3)
```

Typescript:

```typescript
function cubicAlgo(items: number[]): void {
	for (const item of items) {
		for (const item2 of items) {
			for (const item3 of items) {
				console.log(item, " ", item2, " ", item3);
			}
		}
	}
}
```

C#:

```csharp
void CubicAlgo(int[] items) {
    foreach (int item in items) {
        foreach (int item2 in items) {
            foreach (int item3 in items) {
                Console.WriteLine(item + " " + item2 + " " + item3);
            }
        }
    }
}
```

#### O(log n) - Logarithmic

Python:

```python
def logarithmic_algo(items):
    for index in range(0, len(items), 3):
        print(items[index])
```

Typescript:

```typescript
function logarithmicAlgo(items: number[]): void {
	for (let index = 0; index < items.length; index += 3) {
		console.log(items[index]);
	}
}
```

C#:

```csharp
void LogarithmicAlgo(int[] items) {
    for (int index = 0; index < items.Length; index += 3) {
        Console.WriteLine(items[index]);
    }
}
```

#### O(n log n) - Linearithmic

Python:

```python
def linearithmic_algo(items):
    for item in items:
        for item2 in items:
            print(item, ' ', item2)
    for item in items:
        print(item)
```

Typescript:

```typescript
function linearithmicAlgo(items: number[]): void {
	for (const item of items) {
		for (const item2 of items) {
			console.log(item, " ", item2);
		}
	}
	for (const item of items) {
		console.log(item);
	}
}
```

C#:

```csharp
void LinearithmicAlgo(int[] items) {
    foreach (int item in items) {
        foreach (int item2 in items) {
            Console.WriteLine(item + " " + item2);
        }
    }
    foreach (int item in items) {
        Console.WriteLine(item);
    }
}
```

#### O(2^n) - Exponential

Python:

```python
def exponential_algo(items):
    if len(items) == 0:
        return 1
    else:
        item = items.pop()
        return exponential_algo(items) + exponential_algo(items)
```

Typescript:

```typescript
function exponentialAlgo(items: number[]): number {
	if (items.length === 0) {
		return 1;
	} else {
		const item = items.pop();
		return exponentialAlgo(items) + exponentialAlgo(items);
	}
}
```

C#:

```csharp
int ExponentialAlgo(List<int> items) {
    if (items.Count == 0) {
        return 1;
    } else {
        int item = items.Pop();
        return ExponentialAlgo(items) + ExponentialAlgo(items);
    }
}
```

#### O(n!) - Factorial

Python:

```python
def factorial_algo(items):
    if len(items) == 0:
        return 1
    else:
        return len(items) * factorial_algo(items[:-1])
```

Typescript:

```typescript
function factorialAlgo(items: number[]): number {
	if (items.length === 0) {
		return 1;
	} else {
		return items.length * factorialAlgo(items.slice(0, -1));
	}
}
```

C#:

```csharp
int FactorialAlgo(List<int> items) {
    if (items.Count == 0) {
        return 1;
    } else {
        return items.Count * FactorialAlgo(items.GetRange(0, items.Count - 1));
    }
}
```

Feel free to adapt and modify these examples as needed to suit your context and purpose.

### Big O Cheat Sheet

#### Common Big O Cases

- O(1) Constant: No loops, direct access.
- O(log N) Logarithmic: Typically for sorted data, like Binary Search.
- O(n) Linear: Iterating through collections with a single loop.
- O(n log(n)) Log Linear: Often seen in efficient sorting algorithms.
- O(n^2) Quadratic: Nested loops, comparisons between all elements.
- O(2^n) Exponential: Recursive algorithms that solve problems of size N.
- O(n!) Factorial: Highly inefficient, adding a loop for every element.

## Arrays

Arrays are fixed-size, contiguous memory chunks that store elements of the same type. They have some limitations that you should be aware of:

- Arrays are fixed-size, contiguous memory chunks.
- They cannot be resized dynamically.
- Directly inserting or deleting elements is not straightforward, as shifting elements is required.

### Important Concepts

- Arrays have a fixed size and store elements of the same type.
- You can't dynamically resize arrays.
- Inserting or deleting elements involves shifting other elements, making it inefficient.
- Directly inserting or deleting at the beginning, middle, or end is not efficient.

### Examples

#### Creating an Array

C#:

```csharp
var items = new int[] { 1, 2, 3, 4, 5 };
```

TypeScript:

```typescript
const items = [1, 2, 3, 4, 5];
```

Python:

```python
items = [1, 2, 3, 4, 5]
```

#### Getting an Element at a Specific Index

C#:

```csharp
var items = new int[] { 1, 2, 3, 4, 5 };
var item = items[2];
```

TypeScript:

```typescript
const items = [1, 2, 3, 4, 5];
const item = items[2];
```

Python:

```python
items = [1, 2, 3, 4, 5]
item = items[2]
```

#### Insertion at a Specific Index

C#:

```csharp
var items = new int[] { 1, 2, 3, 4, 5 };
items[2] = 6;
```

TypeScript:

```typescript
const items = [1, 2, 3, 4, 5];
items[2] = 6;
```

Python:

```python
items = [1, 2, 3, 4, 5]
items[2] = 6
```

#### Deletion at a Specific Index

C#:

```csharp
var items = new int[] { 1, 2, 3, 4, 5 };
items[2] = 0;
```

TypeScript:

```typescript
const items = [1, 2, 3, 4, 5];
items[2] = 0;
```

Python:

```python
items = [1, 2, 3, 4, 5]
items[2] = 0
```

### Big O of Dynamic Array Methods

| Operation | Big O | Notes                                                   |
| --------- | ----- | ------------------------------------------------------- |
| Access    | O(1)  |                                                         |
| Search    | O(n)  | Because you have to go through all the elements         |
| Insertion | O(n)  | Because you have to shift all the elements to the right |
| Deletion  | O(n)  | Because you have to shift all the elements to the left  |

### Big O of Fixed-Size and Fixed-Type Arrays

| Operation | Big O | Notes                                                              |
| --------- | ----- | ------------------------------------------------------------------ |
| Access    | O(1)  |                                                                    |
| Search    | O(n)  | Because you have to go through all the elements                    |
| Insertion | O(1)  | Since you know the size, you can just insert at the specific index |
| Deletion  | O(1)  | Since you know the size, you can just delete at the specific index |

### Big O of Algorithms

For algorithms, understanding their Big O complexity is crucial. It allows you to predict how they will perform as the input grows. This knowledge can guide you in choosing the right algorithm for your problem and optimizing your code's efficiency.

## Search

### Linear Search

#### Description

Linear search is a simple search algorithm that iterates over a list and checks if the current element is equal to the target element. If the equality condition is met, the algorithm returns the current element's index. If the target element is not found, the algorithm returns -1.

#### Use Cases

1. **Small Datasets:** For very small datasets, where the overhead of sorting or using more complex search algorithms (like binary search) would be more than the time saved, linear search can be a reasonable choice. The simplicity of linear search makes it practical for such cases.

2. **Unsorted Data:** When data is not sorted, or the order of elements doesn't matter, linear search is a straightforward approach to find a specific element in the list. Sorting the data before applying binary search can be an unnecessary overhead in such cases.

3. **Finding First Occurrence:** If you need to find the first occurrence of an element in a list, linear search is sufficient and may even be faster than binary search. Once the element is found, there's no need to continue searching.

4. **Partial Matches:** In scenarios where you're looking for partial matches or patterns within a dataset (e.g., searching for a substring within strings), linear search can be used to find all occurrences of the pattern.

5. **Search in Unordered Data:** If the data is not structured in a way that allows efficient binary search (e.g., when the dataset changes frequently and sorting is not feasible), linear search remains a viable option.

#### Implementation

TypeScript:

```typescript
const linearSearch = (list: number[], item: number): number => {
	for (let i = 0; i < list.length; i++) {
		if (list[i] === item) {
			return i;
		}
	}

	return -1;
};
```

Python:

```python
def linear_search(list, item):
    for i in range(len(list)):
        if list[i] == item:
            return i

    return -1
```

C#:

```csharp
public static int LinearSearch(int[] list, int item)
{
    for (int i = 0; i < list.Length; i++)
    {
        if (list[i] == item)
        {
            return i;
        }
    }

    return -1;
}
```
