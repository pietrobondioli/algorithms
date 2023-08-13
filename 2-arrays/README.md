# Arrays

They are fixed-size, contiguous memory chunks

- That means you cannot grow it
- There is no "insertAt" or push or pop. Doesn't mean you can't write those though.

## Important concepts

- Arrays are fixed-size, contiguous memory chunks
- You can't grow them
- You can't insert or delete
- You can't insert or delete at the beginning/middle/end

## Examples

### Creating an array

C#:

```csharp
var items = new int[] { 1, 2, 3, 4, 5 };
```

Typescript:

```typescript
const items = [1, 2, 3, 4, 5];
```

Python:

```python
items = [1, 2, 3, 4, 5]
```

### Getting at a specific index

C#:

```csharp
var items = new int[] { 1, 2, 3, 4, 5 };
var item = items[2];
```

Typescript:

```typescript
const items = [1, 2, 3, 4, 5];
const item = items[2];
```

Python:

```python
items = [1, 2, 3, 4, 5]
item = items[2]
```

### Insertion at a specific index

C#:

```csharp
var items = new int[] { 1, 2, 3, 4, 5 };
items[2] = 6;
```

Typescript:

```typescript
const items = [1, 2, 3, 4, 5];
items[2] = 6;
```

Python:

```python
items = [1, 2, 3, 4, 5]
items[2] = 6
```

### Deletion at a specific index

C#:

```csharp
var items = new int[] { 1, 2, 3, 4, 5 };
items[2] = null;
```

Typescript:

```typescript
const items = [1, 2, 3, 4, 5];
items[2] = null;
```

Python:

```python
items = [1, 2, 3, 4, 5]
items[2] = None
```

## Big O of dynamic arrays methods

| Operation | Big O | Notes                                                   |
| --------- | ----- | ------------------------------------------------------- |
| Access    | O(1)  |                                                         |
| Search    | O(n)  | Because you have to go through all the elements         |
| Insertion | O(n)  | Because you have to shift all the elements to the right |
| Deletion  | O(n)  | Because you have to shift all the elements to the left  |

## Big O of fixed-size and fixed-type arrays

| Operation | Big O | Notes                                                              |
| --------- | ----- | ------------------------------------------------------------------ |
| Access    | O(1)  |                                                                    |
| Search    | O(n)  | Because you have to go through all the elements                    |
| Insertion | O(1)  | Since you know the size, you can just insert at the specific index |
| Deletion  | O(1)  | Since you know the size, you can just delete at the specific index |
