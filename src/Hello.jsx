import { defineComponent } from 'vue'

export default defineComponent({

    setup() {
        const onClickNaiveButton = () => {
            console.log('Naive App')
        }
        return {
            onClickNaiveButton,
        }
    },

    render() {
        return (
            <div>
                <button onClick={this.onClickNaiveButton}>
                    Naive App
                </button>
            </div>
        )
    }
})
