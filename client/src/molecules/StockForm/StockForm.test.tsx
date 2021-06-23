import '@testing-library/jest-dom/extend-expect'

describe('StockForm component', () => {
    it.todo('should call onSubmit')

    it('linked list', () => {
        class Node<T> {
            next?: Node<T>
            item: T

            constructor(item: T) {
                this.item = item
            }
        }

        class LinkedList<T> {
            head?: Node<T>
            tail?: Node<T>

            add(item: T): void {
                const node = new Node(item)
                if (!this.head) {
                    this.head = node
                }
                if (this.tail) {
                    this.tail.next = node
                }
                this.tail = node
            }

            remove(item: T) {
                let node = this.head
                while (node) {
                    if (node.next?.item === item) {
                        node.next = node.next.next
                        return node.next?.item
                    }
                    node = node.next
                }
                return null
            }

            find(item: T) {
                return this.findNode(item, this.head)
            }

            print() {
                this.printList('', this.head)
            }
            private findNode(item: T, node?: Node<T>): Node<T> | null {
                if (!node) {
                    return null
                }
                if (node.item === item) {
                    return node
                }
                return this.findNode(item, node.next)
            }

            private printList(result: string, node?: Node<T>) {
                if (node) {
                    this.printList(`${result}${node.item}--->`, node.next)
                } else {
                    console.log(result)
                }
            }
        }

        const list = new LinkedList<string>()
        list.add('primeiro')
        list.add('segundo')
        list.add('terceiro')
        list.print()

        list.remove('segundo')
        list.print()
    })
})
