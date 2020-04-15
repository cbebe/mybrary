
FilePond.registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageResize,
  FilePondPluginFileEncode,
);

FilePond.setOptions({
  stylePanelAspectRatio: 150 / 100,
  imageResieTargetWidth: 100,
  imageResieTargetWidth: 150,
})

FilePond.parse(document.body);