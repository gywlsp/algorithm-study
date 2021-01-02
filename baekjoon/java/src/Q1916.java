import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

class Edge implements Comparable<Edge>{
    int v;
    int w;

    Edge(int v, int w){
        this.v = v;
        this.w = w;
    }

    @Override
    public int compareTo(Edge o){
        return w - o.w;
    }
}

public class Q1916 {
    static int N, M;
    static ArrayList<ArrayList<Edge>> graph;
    static int[] minDistMemo;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        N = Integer.parseInt(br.readLine());
        M = Integer.parseInt(br.readLine());

        graph = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            graph.add(new ArrayList<>());
        }
        minDistMemo = new int[N];
        Arrays.fill(minDistMemo, Integer.MAX_VALUE);

        int u, v, w;
        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            u = Integer.parseInt(st.nextToken());
            v = Integer.parseInt(st.nextToken());
            w = Integer.parseInt(st.nextToken());
            graph.get(u-1).add(new Edge(v-1, w));
        }

        st = new StringTokenizer(br.readLine());
        int start = Integer.parseInt(st.nextToken());
        int end = Integer.parseInt(st.nextToken());

        dijkstra(start-1);
        System.out.print(minDistMemo[end-1]);
        br.close();
    }

    public static void dijkstra(int start) {
        PriorityQueue<Edge> pq = new PriorityQueue<>();
        pq.offer(new Edge(start, 0));
        minDistMemo[start] = 0;

        int currV, currW;
        while(!pq.isEmpty()){
            Edge currNode = pq.poll();
            currV = currNode.v;
            currW = currNode.w;

            if(currW > minDistMemo[currV]){
                continue;
            }

            int nextV, nextW;
            for(Edge edge: graph.get(currV)){
                nextV = edge.v;
                nextW = minDistMemo[currV] + edge.w;
                if(nextW >= minDistMemo[nextV]){
                    continue;
                }

                minDistMemo[nextV] = nextW;
                pq.add(new Edge(nextV, nextW));
            }
        }
    }
}
