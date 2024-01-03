window.BENCHMARK_DATA = {
  "lastUpdate": 1704314331270,
  "repoUrl": "https://github.com/jvllmr/sqlalchemy-sessionload",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "bdc2a5fb91324854778787ad32571c46c5ae8fa1",
          "message": "split test, benchmark and coverage into multiple files",
          "timestamp": "2024-01-03T21:37:47+01:00",
          "tree_id": "3be244c25dfea2ab0817185c74f928cedbf32e44",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/bdc2a5fb91324854778787ad32571c46c5ae8fa1"
        },
        "date": 1704314324233,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 179.06890249743628,
            "unit": "iter/sec",
            "range": "stddev: 0.0019604376270080676",
            "extra": "mean: 5.584442558440973 msec\nrounds: 154"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 921.6126619284289,
            "unit": "iter/sec",
            "range": "stddev: 0.00021081626796679937",
            "extra": "mean: 1.0850545368024236 msec\nrounds: 788"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 2.6306013688258876,
            "unit": "iter/sec",
            "range": "stddev: 0.015016041164739966",
            "extra": "mean: 380.14121479999403 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 97.74157229511616,
            "unit": "iter/sec",
            "range": "stddev: 0.002534283863357457",
            "extra": "mean: 10.231061118810821 msec\nrounds: 101"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "bdc2a5fb91324854778787ad32571c46c5ae8fa1",
          "message": "split test, benchmark and coverage into multiple files",
          "timestamp": "2024-01-03T21:37:47+01:00",
          "tree_id": "3be244c25dfea2ab0817185c74f928cedbf32e44",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/bdc2a5fb91324854778787ad32571c46c5ae8fa1"
        },
        "date": 1704314324233,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 179.06890249743628,
            "unit": "iter/sec",
            "range": "stddev: 0.0019604376270080676",
            "extra": "mean: 5.584442558440973 msec\nrounds: 154"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 921.6126619284289,
            "unit": "iter/sec",
            "range": "stddev: 0.00021081626796679937",
            "extra": "mean: 1.0850545368024236 msec\nrounds: 788"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 2.6306013688258876,
            "unit": "iter/sec",
            "range": "stddev: 0.015016041164739966",
            "extra": "mean: 380.14121479999403 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 97.74157229511616,
            "unit": "iter/sec",
            "range": "stddev: 0.002534283863357457",
            "extra": "mean: 10.231061118810821 msec\nrounds: 101"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "d4b2789c17c860376212b10220a6f6845b842f34",
          "message": "Update actions/cache action to v3",
          "timestamp": "2023-12-15T18:23:26Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/4/commits/d4b2789c17c860376212b10220a6f6845b842f34"
        },
        "date": 1704314330255,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 214.73365249821137,
            "unit": "iter/sec",
            "range": "stddev: 0.0019547430620568606",
            "extra": "mean: 4.656931917126169 msec\nrounds: 181"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1070.1401990681188,
            "unit": "iter/sec",
            "range": "stddev: 0.0008316244471838844",
            "extra": "mean: 934.456999999442 usec\nrounds: 841"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 3.480210036550243,
            "unit": "iter/sec",
            "range": "stddev: 0.012580083529187257",
            "extra": "mean: 287.33897940000475 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 118.52011926682259,
            "unit": "iter/sec",
            "range": "stddev: 0.0026222887394302392",
            "extra": "mean: 8.437386042016334 msec\nrounds: 119"
          }
        ]
      }
    ]
  }
}