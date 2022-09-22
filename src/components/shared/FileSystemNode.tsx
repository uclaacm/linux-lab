import file from './../../assets/images/egg.svg';
import directory from './../../assets/images/igloo.svg';
import currentDirectory from './../../assets/images/tux-with-igloo.svg';
import currentHiddenDirectory from './../../assets/images/tux-with-unknown-igloo.svg';
import hiddenFile from './../../assets/images/unknown-egg.svg';
import hiddenDirectory from './../../assets/images/unknown-igloo.svg';
import './../../styles/FileSystemNode.scss';
import { Directory, FileSystemObject } from './globalTypes';

function FileSystemNode({
  nodeDatum,
}: {
  nodeDatum: FileSystemObject;
}): JSX.Element {
  const nodeImage = getNodeImage(nodeDatum);
  return (
    <div className="node-wrapper">
      <div className="image-wrapper">
        <img
          className="file-system-image"
          src={nodeImage.src}
          alt={nodeImage.altText}
        />
      </div>
      <div className="node-label">{nodeDatum.name}</div>
    </div>
  );
}

function getNodeImage(node: FileSystemObject): {
  src: string;
  altText: string;
} {
  if (node.isDirectory) {
    if ((node as Directory).isCurrentDirectory) {
      return node.isHidden
        ? { src: currentHiddenDirectory, altText: 'Current Hidden Directory' }
        : { src: currentDirectory, altText: 'Current Directory' };
    } else {
      return node.isHidden
        ? { src: hiddenDirectory, altText: 'igloo with a question mark' }
        : { src: directory, altText: 'igloo' };
    }
  }
  return node.isHidden
    ? { src: hiddenFile, altText: 'egg with a question mark' }
    : { src: file, altText: 'egg' };
}

export default FileSystemNode;
