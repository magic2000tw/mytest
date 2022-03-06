import React, { useState, useEffect } from 'react';
import { Tree, TreeSelectionKeys } from 'primereact/tree';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import NodeService from '../service/NodeService';

const Example = () => {

    const [treeNodes, setTreeNodes] = useState([]);
    const [selectedTreeNodeKeys, setSelectedTreeNodeKeys] = useState<TreeSelectionKeys>({});
    const [treeTableNodes, setTreeTableNodes] = useState([]);
    const [selectedTreeTableNodeKeys, setSelectedTreeTableNodeKeys] = useState({});

    useEffect(() => {
        const nodeService = new NodeService();
        nodeService.getTreeNodes().then(data => setTreeNodes(data));
        nodeService.getTreeTableNodes().then(data => setTreeTableNodes(data));
    }, []);

    return (
        <div className="grid">
            <div className="col-12">
                test
            </div>
            <div className="col-12">
                test
            </div>
        </div>
    )
}

const comparisonFn = function (prevProps: any, nextProps: any) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(Example, comparisonFn);
