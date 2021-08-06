# Upload file to server using HTML5 and Node.js


> In this article you will learn how you can upload a file to the server using node.js and HTML5.

## Client side file upload

On the client side we need to create a `file` type input that can hold the file data from the client machine. Remember file type input element will parse the data and put it in the form.

```html
<input type="file" name="filetoupload" /><br />
```

The input element with `type=”file”` allows us to choose one or more files from your device (mobile or machine). That chosen file can be uploaded to the server using form submission.


## How to parse files on the server?

Well you could do your own parsing, however I will choose [formidable](https://www.npmjs.com/package/formidable) node package to do the parsing for me. This module is excellent and it can be used for video and image files as well.

In the server file let’s create an upload method.

```ts
app.post('/fileupload', (req, res) => {
  const form = formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    const newpath = 'C:/Users/Rupesh/' + files.filetoupload.name;
    var oldpath = files.filetoupload.path;

    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
      res.write(`${files.filetoupload.name} File uploaded and moved!`);
      res.end();
    });
  });
});
```


## Testing file upload

Now if you upload the file from the client side you can inspect the fiddler and check how the client can send the entire content in binary data format.

![](https://i.imgur.com/NlnKSAp.png){: .full}

Finally, I can see my file got saved in my desired disk.

![](https://i.imgur.com/pOVx2DS.png){: .full}



---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/a32nUcu.png)
