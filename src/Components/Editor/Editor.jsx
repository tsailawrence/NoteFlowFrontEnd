import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./Editor.scss";

//假資料
//{
// title: 'Graph',
// value: '<h1><br></h1><h2>search</h2><ul><li>DFS</li></ul><pre class="ql-syntax" spellcheck="false">DFS(node u){
// 	visited[u] = true;
// 	for each v in (u, v):
// 		if visited[v] == false:
// 			DFS(v);
// }
// </pre><ul><li>BFS</li></ul><pre class="ql-syntax" spellcheck="false">BFS(node s){
// 	q.enqueue(s);
// 	visited[s] = true;

// 	while(!q.isEmpty()){
// 		u = q.dequeue()
// 		for each v in (u, v){
// 			if (visited[v] == false){
// 				q.enqueue(v);
// 				visited[v] = true;
// 		}
// 	}
// }

// </pre><h2>Minimal cost spanning tree</h2><ul><li>Kruskal</li></ul><ol><li class="ql-indent-1">將edges由小到大排序。(可以 min heap 實作)。 → O(e log e)</li><li class="ql-indent-1">建立兩個集合 T, E。開始時T為empty、E為所有edges 的集合。</li><li class="ql-indent-1">每回合由E pop weight 最小的edge，若不會產生cycle 則將此edge 加入T中。</li></ol><ul><li>→ 判斷是否存在cycle 使用dinsjoint set 演算法: O(e log e)</li></ul><ol><li class="ql-indent-1">進行至 T 有 n-1個 edge、或E為空時停止。</li></ol><ul><li class="ql-indent-1">Greedy</li><li>Prim</li></ul><ol><li class="ql-indent-1">選擇一起始 node: s。</li><li class="ql-indent-1">建立三個個集合U = {s}, V = set of all vertices, T = {}。</li><li class="ql-indent-1">每回合找出 weight 最小的 edge e = (u, v)，where u in U and v in V。</li><li class="ql-indent-1">將e加入T，並將 v 加入U。</li><li class="ql-indent-1">當 U = V 時停止。</li></ol><ul><li>Sollin</li><li>將每個 vertice 都視為一個 tree。每回合選擇與其他 tree 連接的 minimun cost edge合併。</li><li>進行到 tree 的總數剩下一顆為止。</li><li>    time Complexity 說明(皆使用 adj list 實作)     Kruskal O(e log e) + O(e log e) = O(e log e) 排序: O(e log e), 檢查迴圈: O(e log e)   Prim O(E + V log V) 使用 binary heap: O(e log v) 使用 Fibbonacci heap: O(e + V log V)   Sollin O(e log v) 每經過一回合 tree 的數量減半: O(v log v) 每回合要從 e 個邊選出最小: e   如為directed graph, |E| 有可能大於 |V|，故|E| 為|V| 的upperbound.</li><li>disjoint set 方式判斷是否存在cycle。</li><li class="ql-indent-1">原先有 |v| 個集合，每個集合內為每個頂點v，且集合的root為該頂點v。</li><li class="ql-indent-1">當要判斷(u, v) 是否形成cycle，找出u, v 所在集合的root, 若u.root ≠ v.root 則合併兩集合，且新集合之root 可為u, v其中一個set的root。</li><li class="ql-indent-1">若 u.root == v.root 則代表形成cycle。</li></ul><h3>重要觀念</h3><ol><li>若圖形的V &gt;&gt; E, e.g. sparse graph, 使用 kruskal 為佳。</li><li>證明: 任兩點間的 minimum cost edge 必屬於 minimum cost spanning tree。</li></ol><ul><li>pf:</li><li class="ql-indent-1">if <strong>e</strong> = minimum cost edge of (u, v) not in the minimum cost spanning tree <strong>MST</strong>, then adding <strong>e</strong> to <strong>MST</strong> must form a cycle. and there must be another edge <strong>e’</strong> connect u, v who’s cost &gt; <strong>e</strong>. By replacing <strong>e’</strong> with <strong>e</strong>, we get another <strong>MST’</strong> where <strong>cost(MST’) &lt; cost(MST)</strong>, so <strong>MST</strong> is not a minimum cost spanning tree, contradiction!</li></ul><ol><li>證明: The edge of second smallest weight must be in a minimum cost spanning tree.</li></ol><ul><li>pf:</li><li>if minimum cost spanning tree = MST(G), second smallest edge = e.</li><li class="ql-indent-1">then MST(G) U e must form a cycle. a cycle has at least three edges(cycle must be a simple path), so there must exist another edge e’ whose cost &gt; e. By replacing e’ with e we get another MST’(G) whose cost &lt; MST, so MST is not a minimum cost spanning tree, contradiciton!</li></ul><h2>最短路徑</h2><ul><li>Dijkstra - single source</li><li>S = {}, V = {set of all nodes}, dist[], pred[]</li></ul><ol><li class="ql-indent-1">由 V-S 中選擇 dist 最小的node v 加入S. (第一輪為起點)</li><li class="ql-indent-1">所有的 (v, w) 中如果 w not in S, 執行relaxation</li><li class="ql-indent-1">relaxation : if dist[w] &gt; dist[v] + (v, w), dist[w] = dist[v] + (v, w)</li><li class="ql-indent-1">反覆執行至|S| = |V|</li></ol><ul><li class="ql-indent-1">dist 紀錄每個 node 相對於起點的距離。</li><li class="ql-indent-1">pred 可以trace 由起點至某一節點的路徑。</li><li>Bellman-Ford - single source</li><li class="ql-indent-1">由一起點開始</li><li class="ql-indent-1">執行 |v-1| 次，每回合對所有edge (u, v) 執行 relaxation.</li><li class="ql-indent-1">relaxation: if dist[v] &gt; dist[u] + cost[u, v], dist[u] = dist[u] + cost[u, v]</li><li class="ql-indent-1">Time Complexity = O(|v-1| * e)</li><li>需要在最後執行:</li><li>for each edge (u, v):</li><li>if dist[v] &gt; dist[u] + cost[u, v] :</li><li>print “negative cycle found!” and break</li><li>Floyd-Warshall - All pair</li><li class="ql-indent-1">執行 k 回合，(k = 1 ~ number of vertice), k 作為中繼點，建立矩陣 A_k</li><li class="ql-indent-1">A_0 = 原先的adjacency matrix</li><li class="ql-indent-1">每回合計算 $A_{k}[i, j] = min(A_{k-1}[i, j], A_{k-1}[i,k] + A_{k-1}[k,j])$</li><li>Johnson</li></ul><h1><br></h1>'
// }

export const Editor = () => {
  const [state, setState] = React.useState({ value: null });
  const handleChange = (value) => {
    setState({ ...state, value });
  };

  console.log(state.value);

  return (
    <div className="editor">
      <div className="header">
        <input
          className="title-input"
          type="text"
          placeholder="Untitled..."
          onChange={(e) => {
            setState({ ...state, title: e.target.value });
          }}
        ></input>
        <span className="focus-border"></span>
        {/* 需限制 user 數量 */}
        <div className="users">
          <div className="user" style={{ backgroundColor: "black" }}>
            R
          </div>
          <div className="user" style={{ backgroundColor: "blue" }}>
            J
          </div>
          <div className="user" style={{ backgroundColor: "purple" }}>
            L
          </div>
        </div>
      </div>
      <div className="text-editor">
        <EditorToolbar />
        <ReactQuill
          theme="snow"
          value={state.value}
          onChange={handleChange}
          placeholder={"Write something awesome..."}
          modules={modules}
          formats={formats}
          className="editor-input"
        />
      </div>
    </div>
  );
};

export default Editor;
