import React from 'react';

const AddDocument = () => {
    return (
        <div>
            <div className='ui icon header'>
                <i className='pdf file outline icon'></i>
                No documents are listed for this customer.
            </div>
            <div className='ui primary button'>Add Document</div>
        </div>
    );
};

export default AddDocument;