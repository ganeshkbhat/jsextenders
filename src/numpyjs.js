/**
 * 
 * Package: extenders
 * Author: Ganesh B
 * Description: Node module for Array, Object, String, Decorator extention Utils like for Python and more for Node.js
 * Install: npm i extenders --save
 * Github: https://github.com/ganeshkbhat/jsextenders
 * npmjs Link: https://www.npmjs.com/package/extenders
 * File: src/numpyjs.js
 * File Description: 
 * 
 * References:
 * https://numpy.org/doc/1.23/numpy-user.pdf
 * https://numpy.org/doc/1.23/numpy-ref.pdf
 * 
*/

/* eslint no-console: 0 */

'use strict';

var { extendArray } = require("./array");
extendArray()

function NumericalArray() {
    // numpy.int32, numpy.int16, and numpy.float64
    var dtype

    // total elements of array
    var ndim

    // dimensions of array
    var shape

    // number of axes (dimensions) of array
    var size

    // size in bytes of each element of the array
    var itemsize

    // actual elements of array
    var data


}


/**

Array Creation: arange, array, copy, empty, empty_like, eye, fromfile, fromfunction, identity, 
Array Creation: linspace, logspace, mgrid, ogrid, ones, ones_like, r_, zeros, zeros_like

Conversions: ndarray.astype, atleast_1d, atleast_2d, atleast_3d, mat

Manipulations: array_split, column_stack, concatenate, diagonal, dsplit, vsplit, hsplit, ndarray.item, newaxis, 
Manipulations: ravel, repeat, reshape, resize, squeeze, swapaxes, take, transpose, dstack, hstack, vstack

Questions: all, any, nonzero, where

Ordering: argmax, argmin, argsort, max, min, ptp, searchsorted, sort

Operations: choose, compress, cumprod, cumsum, inner, ndarray.fill, imag, prod, put, putmask, real, sum

Basic Statistics: cov, mean, std, var, Basic Linear Algebra, cross, dot, outer, linalg.svd, vdot

*/


// Array Getters
// a[-1] > a.get(-1), a[0:10] > a.get(0, 10), a[0:] > a.get(0, undefined|null), 
// a[-1] > a.get("-1"), a[0:10] > a.get("0:10"), a[0:] > a.get("0:"), 

// a[:10] > a.get(undefined|null, 10), a[:] > a.get(undefined|null, undefined|null)
// a[:10] > a.get(":10"), a[:] > a.get(":")
Object.defineProperty(NumericalArray.prototype, 'get', { value: get, enumerable: true });

// Array Setters
// a[-1] > a.set(value, -1), a[0:10] > a.set(value, 0, 10), a[0:] > a.set(value, 0, undefined|null), 
// a[-1] > a.set(value, "-1"), a[0:10] > a.set(value, "0:10"), a[0:] > a.set(value, "0:"), 

// a[:10] > a.set(value, undefined|null, 10), a[:] > a.set(value, undefined|null, undefined|null)
// a[:10] > a.set(value, ":10"), a[:] > a.set(value, ":")
Object.defineProperty(NumericalArray.prototype, 'set', { value: set, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'shape', { value: shape, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'dtype', { value: dtype, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'ndim', { value: ndim, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'size', { value: size, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'flat', { value: flat, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'id', { value: id, enumerable: true });

// c.base is a # c is a view of the data owned by a
Object.defineProperty(NumericalArray.prototype, 'base', { value: base, enumerable: true });
// c.flags.owndata
Object.defineProperty(NumericalArray.prototype, 'flags', { value: flags, enumerable: true });

/**

Array Creation: arange, array, copy, empty, empty_like, eye, fromfile, fromfunction, identity, 
Array Creation: linspace, logspace, mgrid, ogrid, ones, ones_like, r_, zeros, zeros_like

*/

Object.defineProperty(NumericalArray.prototype, 'array', { value: array, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'arrange', { value: arrange, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'copy', { value: copy, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'empty', { value: empty, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'empty_like', { value: empty_like, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'zeros', { value: zeros, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'zeros_like', { value: zeros_like, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'ones', { value: ones, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'ones_like', { value: ones_like, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'random', { value: random, enumerable: true });

Object.defineProperty(NumericalArray.prototype, 'linspace', { value: linspace, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'logspace', { value: logspace, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'mgrid', { value: mgrid, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'ogrid', { value: ogrid, enumerable: true });

Object.defineProperty(NumericalArray.prototype, 'eye', { value: eye, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'memmap', { value: memmap, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'fromfile', { value: fromfile, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'fromfunction', { value: fromfunction, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'identity', { value: identity, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'flatten', { value: flatten, enumerable: true });

/**

Manipulations: array_split, column_stack, concatenate, diagonal, dsplit, vsplit, hsplit, ndarray.item, newaxis, 
Manipulations: ravel, repeat, reshape, resize, squeeze, swapaxes, take, transpose, dstack, hstack, vstack

*/

Object.defineProperty(NumericalArray.prototype, 'item', { value: item, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'c_', { value: c_, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'r_', { value: r_, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'column_stack', { value: column_stack, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'row_stack', { value: row_stack, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'array_split', { value: array_split, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'concatenate', { value: concatenate, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'diagonal', { value: diagonal, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'newaxis', { value: newaxis, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'dstack', { value: dstack, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'hstack', { value: hstack, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'vstack', { value: vstack, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'dsplit', { value: dsplit, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'hsplit', { value: hsplit, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'vsplit', { value: vsplit, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'reshape', { value: reshape, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'ravel', { value: ravel, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'repeat', { value: repeat, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'resize', { value: resize, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'squeeze', { value: squeeze, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'swapaxis', { value: swapaxis, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'take', { value: take, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'transpose', { value: transpose, enumerable: true });

/**

Questions: all, any, nonzero, where
Ordering: argmax, argmin, argsort, max, min, ptp, searchsorted, sort

*/

/**

Operations: choose, compress, cumprod, cumsum, inner, ndarray.fill, imag, prod, put, putmask, real, sum
Basic Statistics: cov, mean, std, var, Basic Linear Algebra, cross, dot, outer, linalg.svd, vdot

*/

Object.defineProperty(NumericalArray.prototype, 'min', { value: min, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'max', { value: max, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'sum', { value: sum, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'cumsum', { value: cumsum, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'add', { value: add, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'subtract', { value: subtract, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'multiply', { value: multiply, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'factorial', { value: factorial, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'divide', { value: divide, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'floor', { value: floor, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'round', { value: round, enumerable: true });

Object.defineProperty(NumericalArray.prototype, 'sin', { value: sin, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'exp', { value: exp, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'sqrt', { value: sqrt, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'square', { value: square, enumerable: true });

// Object.defineProperty(NumericalArray.prototype, 'array', { value: array, enumerable: true });
// Object.defineProperty(NumericalArray.prototype, 'array', { value: array, enumerable: true });
// Object.defineProperty(NumericalArray.prototype, 'array', { value: array, enumerable: true });

module.exports.NumArray = NumericalArray;
// module.exports.Numjs = NumericalArray;
// module.exports.Numpy = NumericalArray;
module.exports.NumericalArray = NumericalArray;


/** 
 * numerictypes: Define the numeric type objects
 * 

This module is designed so "from numerictypes import \\*" is safe.
Exported symbols include:
  Dictionary with all registered number types (including aliases):
    sctypeDict
  Type objects (not all will be available, depends on platform):
      see variable sctypes for which ones you have
    Bit-width names
    int8 int16 int32 int64 int128
    uint8 uint16 uint32 uint64 uint128
    float16 float32 float64 float96 float128 float256
    complex32 complex64 complex128 complex192 complex256 complex512
    datetime64 timedelta64
    c-based names
    bool_
    object_
    void, str_, unicode_
    byte, ubyte,
    short, ushort
    intc, uintc,
    intp, uintp,
    int_, uint,
    longlong, ulonglong,
    single, csingle,
    float_, complex_,
    longfloat, clongfloat,
   As part of the type-hierarchy:    xx -- is bit-width
   generic
     +-> bool_                                  (kind=b)
     +-> number
     |   +-> integer
     |   |   +-> signedinteger     (intxx)      (kind=i)
     |   |   |     byte
     |   |   |     short
     |   |   |     intc
     |   |   |     intp
     |   |   |     int_
     |   |   |     longlong
     |   |   \\-> unsignedinteger  (uintxx)     (kind=u)
     |   |         ubyte
     |   |         ushort
     |   |         uintc
     |   |         uintp
     |   |         uint_
     |   |         ulonglong
     |   +-> inexact
     |       +-> floating          (floatxx)    (kind=f)
     |       |     half
     |       |     single
     |       |     float_          (double)
     |       |     longfloat
     |       \\-> complexfloating  (complexxx)  (kind=c)
     |             csingle         (singlecomplex)
     |             complex_        (cfloat, cdouble)
     |             clongfloat      (longcomplex)
     +-> flexible
     |   +-> character
     |   |     str_     (string_, bytes_)       (kind=S)    [Python 2]
     |   |     unicode_                         (kind=U)    [Python 2]
     |   |
     |   |     bytes_   (string_)               (kind=S)    [Python 3]
     |   |     str_     (unicode_)              (kind=U)    [Python 3]
     |   |
     |   \\-> void                              (kind=V)
     \\-> object_ (not used much)               (kind=O)

 * 
 */

     
/**
 * Numpy needed functions: https://github.com/numpy/numpy/tree/main/numpy/core , https://github.com/numpy/numpy/tree/main/numpy/lib

https://github.com/numpy/numpy/blob/main/numpy/core/numeric.py
// https://github.com/numpy/numpy/blob/main/numpy/core/numerictypes.py
https://github.com/numpy/numpy/blob/main/numpy/core/getlimits.py
https://github.com/numpy/numpy/blob/main/numpy/core/defchararray.py 
https://github.com/numpy/numpy/blob/main/numpy/core/einsumfunc.py
https://github.com/numpy/numpy/blob/main/numpy/core/fromnumeric.py
https://github.com/numpy/numpy/blob/main/numpy/core/function_base.py
https://github.com/numpy/numpy/blob/main/numpy/matrixlib/defmatrix.py
// Array API : https://github.com/numpy/numpy/tree/main/numpy/array_api
// Types and Limits References: https://github.com/numpy/numpy/blob/main/numpy/core/getlimits.py
// Records and Format Parsers References: https://github.com/numpy/numpy/blob/main/numpy/core/records.py
// Shape Functions References: https://github.com/numpy/numpy/blob/main/numpy/core/shape_base.py
// Consider memmap: https://github.com/numpy/numpy/blob/main/numpy/core/memmap.py - memory-map to an array stored in a *binary* file on disk
// Consider Pickle feature or something similar
// Linspace, logspace, geospace References: https://github.com/numpy/numpy/blob/main/numpy/core/function_base.py
// Array item pickers: https://github.com/numpy/numpy/blob/main/numpy/core/fromnumeric.py

 */


// https://github.com/numpy/numpy/blob/main/numpy/core/numerictypes.py
// https://github.com/numpy/numpy/blob/main/numpy/core/shape_base.py
// https://github.com/numpy/numpy/blob/main/numpy/core/records.py
// https://github.com/numpy/numpy/blob/main/numpy/core/umath.py
// https://github.com/numpy/numpy/blob/main/numpy/matrixlib/defmatrix.py
// def _convert_from_string(data)
// def asmatrix(data, dtype=None)
// class matrix(N.ndarray)
// def _from_string(str, gdict, ldict)
// def bmat(obj, ldict=None, gdict=None)

// https://github.com/numpy/numpy/blob/main/numpy/compat/py3k.py
// def asunicode(s):
// def asbytes(s):
// def asstr(s):
// def isfileobj(f):
// def open_latin1(filename, mode='r'):
// def sixu(s):
// def getexception():
// def asbytes_nested(x):
// def asunicode_nested(x):
// def is_pathlib_path(obj):
// class contextlib_nullcontext:
// def npy_load_module(name, fn, info=None):

// Math functions Needs:
// https://github.com/numpy/numpy/blob/main/numpy/core/umath.py

// '_UFUNC_API', 'ERR_CALL', 'ERR_DEFAULT', 'ERR_IGNORE', 'ERR_LOG',
// 'ERR_PRINT', 'ERR_RAISE', 'ERR_WARN', 'FLOATING_POINT_SUPPORT',
// 'FPE_DIVIDEBYZERO', 'FPE_INVALID', 'FPE_OVERFLOW', 'FPE_UNDERFLOW', 'NAN',
// 'NINF', 'NZERO', 'PINF', 'PZERO', 'SHIFT_DIVIDEBYZERO', 'SHIFT_INVALID',
// 'SHIFT_OVERFLOW', 'SHIFT_UNDERFLOW', 'UFUNC_BUFSIZE_DEFAULT',
// 'UFUNC_PYVALS_NAME', '_add_newdoc_ufunc', 'absolute', 'add',
// 'arccos', 'arccosh', 'arcsin', 'arcsinh', 'arctan', 'arctan2', 'arctanh',
// 'bitwise_and', 'bitwise_or', 'bitwise_xor', 'cbrt', 'ceil', 'conj',
// 'conjugate', 'copysign', 'cos', 'cosh', 'deg2rad', 'degrees', 'divide',
// 'divmod', 'e', 'equal', 'euler_gamma', 'exp', 'exp2', 'expm1', 'fabs',
// 'floor', 'floor_divide', 'float_power', 'fmax', 'fmin', 'fmod', 'frexp',
// 'frompyfunc', 'gcd', 'geterrobj', 'greater', 'greater_equal', 'heaviside',
// 'hypot', 'invert', 'isfinite', 'isinf', 'isnan', 'isnat', 'lcm', 'ldexp',
// 'left_shift', 'less', 'less_equal', 'log', 'log10', 'log1p', 'log2',
// 'logaddexp', 'logaddexp2', 'logical_and', 'logical_not', 'logical_or',
// 'logical_xor', 'maximum', 'minimum', 'mod', 'modf', 'multiply', 'negative',
// 'nextafter', 'not_equal', 'pi', 'positive', 'power', 'rad2deg', 'radians',
// 'reciprocal', 'remainder', 'right_shift', 'rint', 'seterrobj', 'sign',
// 'signbit', 'sin', 'sinh', 'spacing', 'sqrt', 'square', 'subtract', 'tan',
// 'tanh', 'true_divide', 'trunc'
