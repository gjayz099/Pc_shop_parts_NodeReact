

function all_Header(props) {
  return (
    <header className="all_header grid">
        <div className="content_all_header self-center m-auto">         
            <h1 className="italic">{props.content}</h1>
        </div>
    </header>
  )
}

export default all_Header