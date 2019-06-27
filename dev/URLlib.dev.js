`
MIT License

Copyright (c) 2018 siddhartha singh | sidd5sci@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`



var cURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;

//alert(window.location.pathname);
var GET = [];

if(document.location.toString().indexOf('?') !== -1){
  var query = document.location
                      .toString()
                      .replace(/^.*?\?/,'')
                      .split('&');
  for(var i=0,l=query.length; i<l;i++){
       var aux = decodeURIComponent(query[i]).split('=');
       console.log(aux);
       GET.push(aux);
  }

}
