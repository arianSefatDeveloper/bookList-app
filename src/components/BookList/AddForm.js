import React, { Component } from 'react'
import Book from './Book'


export default class AddForm extends Component {

    constructor() {
        super()

        this.state = {
            books: [],

            title: '',
            author: '',
            year: '',
        }
        this.titleHandeler = this.titleHandeler.bind(this)
        this.authorHandeler = this.authorHandeler.bind(this)
        this.yearHandeler = this.yearHandeler.bind(this)
        this.submitHandeler = this.submitHandeler.bind(this)

    }
    titleHandeler(event) {
        this.setState({
            title : event.target.value
        })

    }

    authorHandeler(event) {
        this.setState({
            author : event.target.value
        })

    }
    yearHandeler(event) {
        this.setState({
            year : event.target.value
        })

    }
    submitHandeler(event){
        event.preventDefault()
        let {title , author , year} = this.state
        if(title && author && year){
            let newBook = {
                id : this.state.books.length+1,
                title, 
                author, 
                year
            }
            this.setState({
                books: [...this.state.books , newBook]
            })

            this.setState({
                title:'',
                author:'',
                year:''
            })


        }
    }


    render() {
        return (
            <>
                <form id="book-form" autocomplete="off" onSubmit={this.submitHandeler}>
                    <div className="form-group">
                        <label for="title">Title</label>
                        <input type="text" id="title" className="form-control" onChange={this.titleHandeler} value={this.state.title} />
                    </div>

                    <div className="form-group">
                        <label for="author">Author</label>
                        <input type="text" id="author" className="form-control" onChange={this.authorHandeler} value={this.state.author} />
                    </div>

                    <div className="form-group">
                        <label for="year">Year</label>
                        <input type="text" id="year" className="form-control" onChange={this.yearHandeler} value={this.state.year} />
                    </div>
                    <input type="submit" value="Add Book" className="btn btn-warning btn-block add-btn" />
                </form>
                <table class="table table-striped mt-5 text-center">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody id="book-list">

                        {this.state.books.map(book =>(

                                <Book {...book} key={book.id}></Book>
                            
                            ))}
                         


                    </tbody>
                </table>
                            

            </>
        )
    }
}
