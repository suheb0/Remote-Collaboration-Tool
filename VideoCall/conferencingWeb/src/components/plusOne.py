def plusOne(digits):
    """
    :type digits: List[int]
    :rtype: List[int]
    """
    strr = ''
    resarr = []

    for digit in digits:
        strr += str(digit)
    res = int(strr) +1
    res = str(res)

    for r in res:
        resarr.append(int(r))
    
    print(resarr)
    return resarr



digits = [1,2,3]
plusOne(digits)