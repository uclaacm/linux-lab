import { useMemo } from 'react';
import Tree from 'react-d3-tree';
import {
  CustomNodeElementProps,
  RawNodeDatum,
} from 'react-d3-tree/lib/types/common';
import file from './../../assets/images/egg.svg';
import directory from './../../assets/images/igloo.svg';
import hiddenFile from './../../assets/images/unknown-egg.svg';
import hiddenDirectory from './../../assets/images/unknown-igloo.svg';
import { FileSystemObject } from './globalTypes';
import './../../styles/FileSystemRender.scss';

const getNodeImage = (node: FileSystemObject) => {
  if (node.isDirectory) {
    return node.isHidden ? hiddenDirectory : directory;
  }
  return node.isHidden ? hiddenFile : file;
};

const renderForeignObjectNode = ({ nodeDatum, foreignObjectProps }) => {
  return (
    <g>
      {/* `foreignObject` requires width & height to be explicitly set. */}
      <foreignObject {...foreignObjectProps}>
        <div className="node-wrapper">
          <div className="image-wrapper">
            <img
              className="file-system-image"
              src={getNodeImage(nodeDatum)}
              alt="test"
            />
          </div>
          <div className="node-label">{nodeDatum.name}</div>
        </div>
      </foreignObject>
    </g>
  );
};

function FileSystemRender(prop: {
  data: FileSystemObject;
  renderDimensions: { renderWidth: number; renderHeight: number };
}): JSX.Element {
  const FSObject = useMemo(() => getD3TreeFromFSObject(prop.data), [prop.data]);

  const nodeSize = { x: 100, y: 100 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: (-1 * nodeSize.x) / 2,
    y: (-1 * nodeSize.y) / 2,
  };

  function getD3TreeFromFSObject(fsObject: FileSystemObject): RawNodeDatum {
    const { name } = fsObject;
    const rawNodeDatum: RawNodeDatum = {
      ...fsObject,
      name,
      children: [],
    };
    if (fsObject.isDirectory && fsObject.children) {
      rawNodeDatum.children = Array.from(fsObject.children!.values()).map(
        getD3TreeFromFSObject
      );
    }
    return rawNodeDatum;
  }

  return (
    <div id="tree-wrapper">
      <Tree
        data={FSObject}
        rootNodeClassName="node-root"
        branchNodeClassName="node-branch"
        leafNodeClassName="node-leaf"
        orientation="vertical"
        zoomable={false}
        translate={{
          x: prop.renderDimensions.renderWidth / 2.8,
          y: prop.renderDimensions.renderHeight / 8,
        }}
        renderCustomNodeElement={(rd3tProps: CustomNodeElementProps) => {
          return renderForeignObjectNode({ ...rd3tProps, foreignObjectProps });
        }}
        pathFunc={'straight'}
      />
    </div>
  );
}

export default FileSystemRender;
