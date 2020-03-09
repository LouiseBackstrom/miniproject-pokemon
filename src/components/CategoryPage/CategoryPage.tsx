import React from 'react'
import './CategoryPage.css'
import Card from '../Card/Card'
import axios from 'axios'

interface Props {
    // color: string
}

interface State {
    pokemons:
    {
        name: string,
        url: string,
    }[]
}

export default class CategoryPage extends React.Component<Props, State> {
    readonly categoryName = "blue"

    constructor(props: Props) {
        super(props)

        this.state = {
            pokemons: [],

        }
    }

    async pokemonApi() {
        const getPokemonCategoryURL = "https://pokeapi.co/api/v2/pokemon-color"
        const res = await axios.get(getPokemonCategoryURL)

        const category = res.data.results.find((catObj: any) => catObj.name == this.categoryName)
        const res2 = await axios.get(category.url)

        this.setState({ pokemons: res2.data.pokemon_species })
    }

    async componentDidMount() {
        this.pokemonApi()
    }

    // async componentDidUpdate(prevProps: Props) {
    //     if (this.props.color !== prevProps.color)
    // }


    render() {
        return (
            <div>
                {
                    this.state.pokemons ? (
                        <div>
                            {this.state.pokemons.map(pokemon => (
                                <Card name={pokemon.name} pokemonURL={pokemon.url} />
                            ))}
                        </div>
                    ) : (
                            <h1>loading...</h1>
                        )

                }
            </div>
        )
    }
}
