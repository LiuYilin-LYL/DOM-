/*const div = dom.creat(" <div>newDiv</div>");
console.log(div);
dom.after(test, div)

const div3 = dom.creat(" <div id='parent'>parent</div>");
dom.wrap(div, div3)
const nodes = dom.empty(window.empty)
console.log(nodes)
dom.attr(test, 'title', 'Hi, I am Frank')
const title = dom.attr(test, 'title')
console.log(`title: ${title}`)

dom.text(test, '你好，这是新的内容')
dom.text(test)

dom.style(test, { border: '1px solid red ', color: 'blue' })
console.log(dom.style(test, 'border'))
dom.style(div, 'color', 'red')
dom.style(test, 'border', '1px solid green ')

dom.class.add(test, 'red')
dom.class.add(test, 'blue')
dom.class.remove(test, 'blue')
console.log(dom.class.has(test, 'blue'))


const fn = () => {
    console.log('点击了')
}
dom.on(test, 'click', fn)
dom.off(test, 'click', fn)

const testDiv = dom.find('#test')[0]
const test2 = dom.find('#test2')[0]
console.log(dom.find('.red', test2)[0])

console.log(dom.parent(test))

console.log(dom.siblings(dom.find('#s2')[0]))
console.log(dom.next(dom.find('#s1')[0]))
console.log(dom.previous(dom.find('#s3')[0]))

const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))

console.log(dom.index(s3))*/

console.log(dom.find('#test2>.red')[0])
dom.style(travel, 'color', 'red')
const divList = dom.find('.red')
console.log(divList)
dom.each(divList, (n) => console.log(n))
