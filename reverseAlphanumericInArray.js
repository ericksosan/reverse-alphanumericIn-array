const isNotCharacter = (element) => ((/[a-z0-9]/gi).test(element))

const reverseAlphanumericInArray = (arr) => {
  const stack = arr.filter((item) => isNotCharacter(item))

  for (let i = 0; i < arr.length; i++) {
    if (!isNotCharacter(arr[i])) continue

    arr[i] = stack.pop()
  }

  return arr
}


const res = reverseAlphanumericInArray(['n', 2, '&', 'a', 'l', 9, '$', 'q', 47, 'i', 'a', 'j', 'b', 'z', '%', 8])
console.log(res) // Result --> [8, 'z', '&', 'b', 'j', 'a', '$', 'i', 47, 'q', 9, 'l', 'a', 2, '%', 'n']

const res1 = reverseAlphanumericInArray([5, '*', 'f', 'g', '%', 'p', '^', 8])
console.log(res1) // Result --> [8, '*', 'p', 'g', '%', 'f', '^', 5]

const res2 = reverseAlphanumericInArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'])
console.log(res2) // Result --> ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']

const res3 = reverseAlphanumericInArray(['1', '2', '3', '4', '5', '6', '7', '8', '9'])
console.log(res3) // Result --> ['9', '8', '7', '6', '5', '4', '3', '2', '1']