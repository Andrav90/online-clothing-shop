import React, { Component } from 'react';
import Layout from '../../components/layout/Layout';
import products from '../../utils/products.json';
import ProductList from '../../components/productList/ProductList';
import BaseListSidebar from '../../components/baseListSidebar/BaseListSidebar';
import './Category.css';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: {},
            items: [],
            selectedOption: "option1",
        }      
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const { match } = this.props;
        const categoryName = match.params.categoryName;
        this.setState({
            category: products[categoryName],
            items: products[categoryName].items
        });
    }

    handleChange(e){
        this.setState({selectedOption: e.target.value})
    }
    
    render() {
        const filteredOpt2 = this.state.items.filter(item => item.price <= 60);
        const filteredOpt3 = this.state.items.filter(item => item.price >= 60 && item.price <= 100);
        const filteredOpt4 = this.state.items.filter(item => item.price >= 100 && item.price <= 150);
        const filteredOpt5 = this.state.items.filter(item => item.price >= 150);

        return (
            <Layout>
                <div className="category-container">
                    <BaseListSidebar handleChange={this.handleChange} onSubmit={this.handleSubmit} {...this.state} />
                    <hr style={{ borderRight: '2px solid black', height: 'auto', marginRight: 0}}/>
                    <div className="container-fluid">
                        <h3 style={{marginLeft: '90px'}} >{ this.state.category.name }</h3>

                        {
                            this.state.selectedOption === "option1"
                                ? <ProductList products={this.state.items} />
                                : this.state.selectedOption === "option2"
                                ? <ProductList products={filteredOpt2} />
                                : this.state.selectedOption === "option3"
                                ? <ProductList products={filteredOpt3} />
                                : this.state.selectedOption === "option4"
                                ? <ProductList products={filteredOpt4} />
                                : this.state.selectedOption === "option5"
                                ? <ProductList products={filteredOpt5} />
                                : null
                        }
                      
                    </div>
                </div>
            </Layout>
        );
    };
};

export default Category;