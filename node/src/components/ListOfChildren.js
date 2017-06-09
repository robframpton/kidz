import JSXComponent from 'metal-jsx';

class ListOfChildren extends JSXComponent {
    _handleChildrenUpdate() {

    }


}

ListOfChildren.PROPS = {
    children: {
        validator: core.isObject(),
        value: {}
    }
}